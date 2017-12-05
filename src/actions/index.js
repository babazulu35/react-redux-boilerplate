import { testdata } from '../data/dummy-data';

/* ACTİONS */
export const LOAD_TEST_PAGE = 'LOAD_TEST_PAGE';


/* Action Creators */

export function loadTestPage() {
    return { type: LOAD_TEST_PAGE, data: testdata };
}