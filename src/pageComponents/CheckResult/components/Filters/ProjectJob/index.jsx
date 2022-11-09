import { useSearchJobByProject } from '@/api/querys/jobManagementQuery';
import { useSearchAllProject } from '@/api/querys/projectManagament';
import MuiSelect from '@/components/customMui/MuiSelect';
import { Grid } from '@mui/material';
import { memo, useEffect, useMemo } from 'react';
import { useFieldArray } from 'react-hook-form';

const ProjectJob = ({ control, watch, reset }) => {
  const projectName = watch('projectName', false);

  const { data: projects } = useSearchAllProject(null, { enabled: !projectName });

  const { data: jobs } = useSearchJobByProject({ project_name: projectName || 'ALL' });

  const { update } = useFieldArray({ control, name: 'jobName' });

  const projectOptions = useMemo(
    () => (projects ?? []).map((project) => ({ label: project.name, value: project.name })),
    [projects]
  );

  const jobOptions = useMemo(
    () =>
      (jobs ?? []).map((job) => ({
        label: `${job.source_table_name}-${job.target_table_name}`,
        value: job.period_sec
      })),
    [jobs]
  );

  useEffect(() => {
    console.log('projectName', projectName);
    update({ jobName: 'ALL' });
    // reset({ jobName: 'ALL' });
  }, [jobs]);

  return (
    <>
      <Grid item xs={4}>
        <MuiSelect
          label="Project Name"
          name="projectName"
          control={control}
          options={[{ label: '전체', value: 'ALL' }, ...projectOptions]}
          required
          rules={{
            required: 'Connection Name 필수 입력입니다.'
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <MuiSelect
          label="Job(Tables)"
          name="jobName"
          control={control}
          options={[{ label: '전체', value: 'ALL' }, ...jobOptions]}
          required
          rules={{
            required: 'Connection Name 필수 입력입니다.'
          }}
        />
      </Grid>
    </>
  );
};

export default memo(ProjectJob);
