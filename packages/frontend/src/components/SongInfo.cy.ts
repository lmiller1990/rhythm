import { h } from "vue";
import { mount } from "cypress/vue";
import SongInfo from "./SongInfo.vue";

describe("SongInfo", () => {
  it("playground", () => {
    const Parent = h("div", { style: `margin: 80px 140px;` }, [h(SongInfo)]);
    mount(() => Parent);
  });
});
