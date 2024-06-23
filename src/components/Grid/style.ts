import { css } from '@emotion/react';

import type { GridSizePresetsType } from './types';

const GRID_PRESETS: GridSizePresetsType[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];

const GRID_VALUES = GRID_PRESETS.reduce<Record<GridSizePresetsType, string>>(
  (result, value) => {
    const percentage = (100 / 12) * value;
    result[value] = `${percentage}%`;

    return result;
  },
  {
    1: '0%',
    10: '0%',
    11: '0%',
    12: '0%',
    2: '0%',
    3: '0%',
    4: '0%',
    5: '0%',
    6: '0%',
    7: '0%',
    8: '0%',
    9: '0%'
  }
);

export const styGrid = css`
  width: 100%;
  margin: auto;
  display: block;

  .grid-row {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .grid-item {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;

    ${GRID_PRESETS.map((key) => {
      return `
        &[data-col='${key}'] {
          flex: 0 0 ${GRID_VALUES[key]};
          max-width: ${GRID_VALUES[key]};
        }
      `;
    }).join(' ')}

    @media (max-width: 576px) {
      ${GRID_PRESETS.map((key) => {
        return `
          &[data-col-xs='${key}'] {
            flex: 0 0 ${GRID_VALUES[key]};
            max-width: ${GRID_VALUES[key]};
          }
          `;
      }).join(' ')}
    }

    @media (min-width: 576px) {
      ${GRID_PRESETS.map((key) => {
        return `
          &[data-col-sm='${key}'] {
            flex: 0 0 ${GRID_VALUES[key]};
            max-width: ${GRID_VALUES[key]};
          }
      `;
      }).join(' ')}
    }

    @media (min-width: 768px) {
      ${GRID_PRESETS.map((key) => {
        return `
       

          &[data-col-md='${key}'] {
            flex: 0 0 ${GRID_VALUES[key]};
            max-width: ${GRID_VALUES[key]};
          }
          
          
          `;
      }).join(' ')}
    }

    @media (min-width: 992px) {
      ${GRID_PRESETS.map((key) => {
        return `
          &[data-col-lg='${key}'] {
            flex: 0 0 ${GRID_VALUES[key]};
            max-width: ${GRID_VALUES[key]};
          }
          `;
      }).join(' ')}
    }

    @media (min-width: 1200px) {
      ${GRID_PRESETS.map((key) => {
        return `
          &[data-col-xl='${key}'] {
            flex: 0 0 ${GRID_VALUES[key]};
            max-width: ${GRID_VALUES[key]};
          }
          `;
      }).join(' ')}
    }
  }
`;
