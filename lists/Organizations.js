const { Text, CalendarDay } = require('@keystonejs/fields');
const { atTracking, byTracking } = require('@keystonejs/list-plugins');

module.exports = {
  fields: {
    name: { label: "組織名稱", type: Text, isRequired: true },
    alternative: { label: "組織別名", type: Text },
    other_names: { label: "組織舊名", type: Text },
    identifiers: { label: "統一編號", type: Text },
    classification: { label: "組織類型", type: Text },
    area: { label: "組織地區", type: Text },
    abstract: { label: "一句話描述該組織", type: Text },
    description: { label: "組織詳細介紹", type: Text },
    founding_date: { label: "創立時間", type: CalendarDay },
    dissolution_date: { label: "解散時間", type: CalendarDay },
    image: { label: "圖像", type: Text },
    contact_details: { label: "聯絡方式", type: Text },
    links: { label: "網站", type: Text },
    address: { label: "組織稅籍登記地址", type: Text },
    source: { label: "來源", type: Text },
  },
  plugins: [
    atTracking(),
    byTracking(),
  ],
  labelResolver: item => `${item.name}+${item.address}`,
};
