import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { appleSmartBanner } from '../src/appLink.mjs';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

test('the Smart App Banner names a species and nothing else', () => {
  const species = 'app-id=6826707489, app-argument=https://whatsthatmushroom.app/mushroom/Boletus%20edulis/';
  assert.equal(appleSmartBanner('https://whatsthatmushroom.app/'), 'app-id=6826707489');
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/family/Boletaceae/'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/mushroom/Boletus%20edulis/'),
    species,
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/mushroom/Boletus%20edulis'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/mushroom/foo/../Boletus%20edulis/'),
    species,
  );
  assert.equal(
    appleSmartBanner('https://evil.example/mushroom/Boletus%20edulis/'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/sk/mushroom/Boletus%20edulis/'),
    'app-id=6826707489, app-argument=https://whatsthatmushroom.app/sk/mushroom/Boletus%20edulis/',
  );
  assert.equal(appleSmartBanner('https://whatsthatmushroom.app/mushroom/'), 'app-id=6826707489');
  assert.equal(appleSmartBanner('https://whatsthatmushroom.app/mushroom'), 'app-id=6826707489');
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/mushroom/Boletus%20edulis/extra/'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/en/mushroom/Boletus%20edulis/'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/list/mushroom/Boletus%20edulis/'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/?next=/mushroom/Boletus%20edulis'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/mushroom/Boletus%20edulis/?utm=1'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/mushroom/Boletus%20edulis/?'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/mushroom/Boletus%20edulis/#cap'),
    'app-id=6826707489',
  );
  assert.equal(
    appleSmartBanner('https://whatsthatmushroom.app/mushroom/Boletus%20edulis/#'),
    'app-id=6826707489',
  );
  assert.equal(appleSmartBanner('not a url /mushroom/Boletus%20edulis/'), 'app-id=6826707489');
});

test('association files claim only this app and species pages', () => {
  const assetlinks = JSON.parse(
    fs.readFileSync(path.join(root, 'public/.well-known/assetlinks.json'), 'utf8'),
  );
  assert.equal(assetlinks.length, 1);
  assert.equal(assetlinks[0].target.package_name, 'sk.ab.shrooms');
  assert.deepEqual(assetlinks[0].target.sha256_cert_fingerprints, [
    '39:CE:C3:59:3F:D9:55:CE:97:46:0E:7C:5B:39:AF:13:D5:B3:D8:DD:11:12:DF:CE:E6:F7:04:5D:96:CD:10:D2',
    '0A:81:99:42:5F:1B:99:8B:EF:84:05:76:3E:00:8F:F8:88:E1:64:F8:33:DF:57:03:DA:EC:E4:D1:79:F8:79:62',
  ]);

  const aasa = JSON.parse(
    fs.readFileSync(path.join(root, 'public/.well-known/apple-app-site-association'), 'utf8'),
  );
  const detail = aasa.applinks.details[0];
  assert.equal(detail.appID, '7T8SX9VBGV.sk.ab.shrooms');
  assert.ok(detail.paths.includes('/mushroom/*'));
  assert.ok(detail.paths.includes('/*/mushroom/*'));
  assert.equal(detail.paths.includes('/*'), false);
  const open = detail.components.filter((item) => !item.exclude).map((item) => item['/']);
  assert.deepEqual(open, ['/mushroom/*', '/*/mushroom/*']);

  const hosting = JSON.parse(fs.readFileSync(path.join(root, 'firebase.json'), 'utf8')).hosting;
  const types = new Map();
  for (const group of hosting.headers) {
    for (const header of group.headers) {
      if (header.key === 'Content-Type') types.set(group.source, header.value);
    }
  }
  assert.equal(types.get('/.well-known/apple-app-site-association'), 'application/json');
  assert.equal(types.get('/.well-known/assetlinks.json'), 'application/json');
});
