import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SourceIcon from '@mui/icons-material/Source';
import WorkIcon from '@mui/icons-material/Work';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Link, useLocation } from 'react-router-dom';
import { URL } from '@/const/router';
import { useAlertStore } from '@/store';
import AddLinkIcon from '@mui/icons-material/AddLink';
const Lnb = () => {
  const location = useLocation();
  const { alert } = useAlertStore();

  const getClass = React.useCallback(
    (path) => {
      return location?.pathname === path ? 'on' : '';
    },
    [location?.pathname]
  );

  return (
    <StyledPaper>
      <Title>Menu</Title>
      <MenuList>
        <CustomMenuItem className={getClass(URL.main)}>
          <StyledLink to={URL.main}>
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            Dashboard
          </StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.operationManagement)}>
          <StyledLink to={URL.operationManagement}>
            <ListItemIcon>
              <ApartmentIcon fontSize="small" />
            </ListItemIcon>
            Operation Management
          </StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.dataSourceManagement)}>
          <StyledLink to={URL.dataSourceManagement}>
            <ListItemIcon>
              <SourceIcon fontSize="small" />
            </ListItemIcon>
            DataSource Management
          </StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.projectManagement)}>
          <StyledLink to={URL.projectManagement}>
            <ListItemIcon>
              <NoteAltIcon fontSize="small" />
            </ListItemIcon>
            Project Management
          </StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.configuration)}>
          <StyledLink to={URL.configuration}>
            <ListItemIcon>
              <WorkIcon fontSize="small" />
            </ListItemIcon>
            Job configuration
          </StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.checkResult)}>
          <StyledLink to={URL.checkResult}>
            <ListItemIcon>
              <AssignmentTurnedInIcon fontSize="small" />
            </ListItemIcon>
            Check Result
          </StyledLink>
        </CustomMenuItem>
        <CustomMenuItem className={getClass(URL.userManagement)}>
          <StyledLink to={URL.userManagement}>
            <ListItemIcon>
              <PeopleAltIcon fontSize="small" />
            </ListItemIcon>
            User Management
          </StyledLink>
        </CustomMenuItem>
        <CustomMenuItem>
          <StyledLink
            disabled
            className="disable"
            onClick={() => {
              alert({
                content: (
                  <>
                    오픈 준비중입니다.
                    <br />
                    (2022년 12월 예정
                  </>
                ),
                okText: 'ok'
              });
            }}
          >
            <ListItemIcon>
              <FactCheckIcon fontSize="small" />
            </ListItemIcon>
            Batch Validation Configuration
          </StyledLink>
        </CustomMenuItem>
      </MenuList>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  border-radius: 0;
  width: 250;
  max-width: '100%';
  background-color: ${colors.gray900};
  * {
    color: white;
  }
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
  font-weight: bold;
  padding: 20px 0 10px 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white100};
  width: 100%;
  font-size: 16px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  &.disable {
    color: ${colors.gray500};
    svg {
      fill: ${colors.gray500};
    }
  }
`;

// const CustomMenu = styled(Menu)`
//   .MuiList-root {
//     /* box-shadow: 0 0 0 3px ${colors.bluegray700} inset; */
//   }
// `;
const CustomMenuItem = styled(MenuItem)`
  margin: 7px 0;
  padding: 0;
  &.on {
    background-color: ${colors.white100};
    /* margin: 0 3px; */

    a {
      color: ${colors.gray900};
      svg {
        fill: ${colors.gray900};
      }
    }
  }
`;
export default Lnb;
