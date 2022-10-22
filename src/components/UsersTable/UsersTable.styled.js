import styled from 'styled-components';

export const StyledTableBox = styled.div`
  border-radius: 10px;
  position: relative;
  outline: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 24px;
  background-color: #e7ebf0;
`;

export const StyledTableInner = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  width: 100%;
  overflow-x: auto;
`;

export const StyledUsersTable = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  flex-direction: column;
  justify-content: center;
`;

export const StyledHeadCell = styled.th`
  padding: 16px;
  border-bottom: 1px solid #e7ebf0;
  text-align: left;
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0.01071em;
`;

export const StyledCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e7ebf0;
  font-family: 'Arial', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
`;
