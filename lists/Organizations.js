const { Text, Relationship, Virtual } = require('@keystonejs/fields');
const { atTracking, byTracking } = require('@keystonejs/list-plugins');

module.exports = {
  fields: {
    name: { label: "組織名稱", type: Text, isRequired: true },
    alternative: { label: "組織別名", type: Text },
    other_names: { label: "組織舊名", type: Text },
    identifiers: { label: "統一編號", type: Text },
    classification: { label: "組織類型", type: Text },
    parent: { label: "上層組織", type: Relationship, many: false, ref: 'Organization' },
    children: { label: "附屬組織", type: Relationship, many: true, ref: 'Organization' },
    area: { label: "組織地區", type: Text },
    abstract: { label: "一句話描述該組織", type: Text },
    description: { label: "組織詳細介紹", type: Text },
    founding_date: { label: "創立時間", type: Text },
    dissolution_date: { label: "解散時間", type: Text },
    image: { label: "圖像", type: Text },
    contact_details: { label: "聯絡方式", type: Text },
    links: { label: "網站", type: Text },
    address: { label: "組織稅籍登記地址", type: Text },
    source: { label: "來源", type: Text },
    mapping: {
      label: "組織名稱+地址",
      type: Virtual,
      resolver: item => `${item.name}+${item.address}`,
    }
  },
  plugins: [
    atTracking(),
    byTracking(),
  ],
  labelField: "mapping",
};
