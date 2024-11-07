import * as fs from 'fs';

import { fetchMenuItems } from './menu/menu-utils';
import { DiningHalls } from './types';

(async () => {

    fs.writeFileSync('menu.json', JSON.stringify(await fetchMenuItems(DiningHalls.sixtyfour, 1), null, 2));

})();
