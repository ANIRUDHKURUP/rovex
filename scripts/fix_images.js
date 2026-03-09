const fs = require('fs');
const path = require('path');

// --- Home.tsx: Replace asset image extensions ---
const homePath = path.join('src', 'pages', 'Home.tsx');
let content = fs.readFileSync(homePath, 'utf8');

const assetReplacements = [
  ['/assets/smarthome.jpg', '/assets/smarthome.webp'],
  ['/assets/ai camera.png', '/assets/ai camera.webp'],
  ['/assets/multiroomaudiosystem.png', '/assets/multiroomaudiosystem.webp'],
  ['/assets/access control.png', '/assets/access control.webp'],
  ['/assets/doorlock.jpg', '/assets/doorlock.webp'],
  ['/assets/gate automation.jpg', '/assets/gate automation.webp'],
  ['/assets/video door phone system.png', '/assets/video door phone system.webp'],
  ['/assets/intrusion alarm.png', '/assets/intrusion alarm.webp'],
  ['/assets/networking and wifi.png', '/assets/networking and wifi.webp'],
  ['/assets/curtail and blinds automation.png', '/assets/curtain and blinds automation.webp'],
  ['/assets/curtain and blinds automation.png', '/assets/curtain and blinds automation.webp'],
  ['/assets/smart shutter automation.png', '/assets/smart shutter automation.webp'],
  ['/assets/automatic boom barrier.png', '/assets/automatic boom barrier.webp'],
  ['/assets/sprinkler automation.png', '/assets/sprinkler automation.webp'],
];

for (const [from, to] of assetReplacements) {
  const occurrences = content.split(from).length - 1;
  if (occurrences > 0) {
    content = content.split(from).join(to);
    console.log('Replaced', occurrences, 'x', from, '->', to);
  }
}

// Replace dynamic logo paths: /logo/${logo} and /leaders/${logo}
// We do NOT modify the dynamic ref, instead we update the logo arrays to use webp filenames
// Find logo arrays and replace extensions
content = content.replace(/'abb\.png'/g, "'abb.webp'");
content = content.replace(/'ajax\.png'/g, "'ajax.webp'");
content = content.replace(/'bosch\.png'/g, "'bosch.webp'");
content = content.replace(/'cisco\.png'/g, "'cisco.webp'");
content = content.replace(/'dlink\.png'/g, "'dlink.webp'");
content = content.replace(/'eglu\.png'/g, "'eglu.webp'");
content = content.replace(/'ezviz\.png'/g, "'ezviz.webp'");
content = content.replace(/'fibaro\.png'/g, "'fibaro.webp'");
content = content.replace(/'fortinet\.png'/g, "'fortinet.webp'");
content = content.replace(/'hikvision\.png'/g, "'hikvision.webp'");
content = content.replace(/'hogar\.png'/g, "'hogar.webp'");
content = content.replace(/'knx\.png'/g, "'knx.webp'");
content = content.replace(/'legrand\.png'/g, "'legrand.webp'");
content = content.replace(/'netgear\.png'/g, "'netgear.webp'");
content = content.replace(/'panasonic\.png'/g, "'panasonic.webp'");
content = content.replace(/'samsung\.png'/g, "'samsung.webp'");
content = content.replace(/'schneiderelectric\.png'/g, "'schneiderelectric.webp'");
content = content.replace(/'somfy\.png'/g, "'somfy.webp'");
content = content.replace(/'sophos\.png'/g, "'sophos.webp'");
content = content.replace(/'tenda\.png'/g, "'tenda.webp'");
content = content.replace(/'tplink\.png'/g, "'tplink.webp'");
content = content.replace(/'tuya\.png'/g, "'tuya.webp'");
content = content.replace(/'tyco\.png'/g, "'tyco.webp'");
content = content.replace(/'yalen\.png'/g, "'yalen.webp'");

// Leaders
content = content.replace(/'adani\.png'/g, "'adani.webp'");
content = content.replace(/'ajion\.png'/g, "'ajion.webp'");
content = content.replace(/'aps\.jpg'/g, "'aps.webp'");
content = content.replace(/'arabiann\.jpg'/g, "'arabiann.webp'");
content = content.replace(/'asianet\.png'/g, "'asianet.webp'");
content = content.replace(/'cabriotn\.png'/g, "'cabriotn.webp'");
content = content.replace(/'cmc\.jpg'/g, "'cmc.webp'");
content = content.replace(/'co-operative\.png'/g, "'co-operative.webp'");
content = content.replace(/'emin\.png'/g, "'emin.webp'");
content = content.replace(/'farook\.png'/g, "'farook.webp'");
content = content.replace(/'fincare\.png'/g, "'fincare.webp'");
content = content.replace(/'hp\.png'/g, "'hp.webp'");
content = content.replace(/'icici\.png'/g, "'icici.webp'");
content = content.replace(/'kaalyn\.png'/g, "'kaalyn.webp'");
content = content.replace(/'karadan\.png'/g, "'karadan.webp'");
content = content.replace(/'kdch\.jpg'/g, "'kdch.webp'");
content = content.replace(/'kevabox\.jpg'/g, "'kevabox.webp'");
content = content.replace(/'ksebn\.png'/g, "'ksebn.webp'");
content = content.replace(/'kurikkaln\.png'/g, "'kurikkaln.webp'");
content = content.replace(/'lipin\.png'/g, "'lipin.webp'");
content = content.replace(/'lulu\.png'/g, "'lulu.webp'");
content = content.replace(/'m-dit\.png'/g, "'m-dit.webp'");
content = content.replace(/'meraldan\.png'/g, "'meraldan.webp'");
content = content.replace(/'minar\.png'/g, "'minar.webp'");
content = content.replace(/'nayara\.png'/g, "'nayara.webp'");
content = content.replace(/'peekeyn\.png'/g, "'peekeyn.webp'");
content = content.replace(/'preethi\.jpg'/g, "'preethi.webp'");
content = content.replace(/'rg\.png'/g, "'rg.webp'");
content = content.replace(/'safi\.png'/g, "'safi.webp'");
content = content.replace(/'sbin\.png'/g, "'sbin.webp'");
content = content.replace(/'tc-onen\.png'/g, "'tc-onen.webp'");
content = content.replace(/'tec\.png'/g, "'tec.webp'");
content = content.replace(/'the raviz\.png'/g, "'the raviz.webp'");
content = content.replace(/'theaddress\.jpg'/g, "'theaddress.webp'");
content = content.replace(/'xylem\.jpg'/g, "'xylem.webp'");
content = content.replace(/'yashn\.png'/g, "'yashn.webp'");

// Also fix CSS class/data attribute selectors that reference .png/.jpg filenames
// (keep those intact - they are not file paths)
// Save
fs.writeFileSync(homePath, content, 'utf8');
console.log('Home.tsx updated successfully');
