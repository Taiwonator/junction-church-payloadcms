import * as migration_20260322_003823 from './20260322_003823';
import * as migration_20260322_082504 from './20260322_082504';

export const migrations = [
  {
    up: migration_20260322_003823.up,
    down: migration_20260322_003823.down,
    name: '20260322_003823',
  },
  {
    up: migration_20260322_082504.up,
    down: migration_20260322_082504.down,
    name: '20260322_082504'
  },
];
