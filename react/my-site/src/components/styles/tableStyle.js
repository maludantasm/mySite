import styled from 'styled-components';

const TableGrid = styled.div`
    display: grid;
    
    grid-template-rows: 60% 60%;
    grid-template-columns: 50% 50%;`;

    const TableColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export {TableGrid, TableColumn};