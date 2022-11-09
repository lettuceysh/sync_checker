import { useState } from 'react';
import { useQuery } from 'react-query';
import { dsManagementSearchAllDSInfoByDirection } from '../dsManagement';
import {
  jobManagementSearchAllSessionResultByOptions,
  jobManagementSearchOOSRecordsBySessionID,
  searchAllJobStatusWithProject,
  searchAllJobWithProject,
  searchJobByProject
} from '../jobManagement';

export const JobManagementKey = {
  searchAllJobStatusWithProject: ['searchAllJobStatusWithProject'],
  searchAllJobWithProject: ['searchAllJobWithProject'],
  searchJobByProject: (request) => ['searchJobByProject', request],
  SearchAllSessionResultByOption: (request) => ['SearchAllSessionResultByOption', request],
  jobManagementSearchOOSRecordsBySessionID: (request) => [
    'jobManagementSearchOOSRecordsBySessionID',
    request
  ]
};

export const useSearchAllJobStatusWithProject = () => {
  return useQuery(
    JobManagementKey.searchAllJobStatusWithProject,
    () => searchAllJobStatusWithProject(),
    {
      select: (data) => {
        return data.data?.jobStatusaWithProject;
      }
    }
  );
};

export const useSearchAllJobWithProject = () => {
  return useQuery(JobManagementKey.searchAllJobWithProject, () => searchAllJobWithProject(), {
    select: (data) => {
      return data.data?.jobWithProject;
    }
  });
};

export const useSearchJobByProject = (request, options) => {
  return useQuery(JobManagementKey.searchJobByProject(request), () => searchJobByProject(request), {
    ...options,
    select: (data) => {
      return data.data?.jobs;
    }
  });
};

export const useSearchAllSessionResultByOptions = (request) => {
  return useQuery(
    JobManagementKey.SearchAllSessionResultByOption(request),
    () => jobManagementSearchAllSessionResultByOptions(request),
    {
      enabled: !!request,
      select: (data) => {
        return data.data?.sessionResult;
      }
    }
  );
};

export const useSearchOOSRecordsBySessionID = (request) => {
  return useQuery(
    JobManagementKey.jobManagementSearchOOSRecordsBySessionID(request),

    () => jobManagementSearchOOSRecordsBySessionID(request),
    {
      enabled: !!request?.session_id,
      select: (data) => {
        return data.data?.oos_records.map((record) => ({
          ...record,
          source: JSON.parse(record.source_record_vals_json) || {},
          target: JSON.parse(record.target_record_vals_json) || {}
        }));
      }
    }
  );
};
