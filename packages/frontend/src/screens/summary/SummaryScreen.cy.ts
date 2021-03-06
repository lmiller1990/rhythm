import SummaryScreen from "./SummaryScreen.vue";
import style from "../../../../breeze-css/dist/breeze.css";
import appStyle from "../../style.css";
import { useSongsStore } from "../../stores/songs";
import { testSong } from "../../../cypress/fixtures/songs";
import { useSummaryStore } from "../../stores/summary";
import { mount } from "../../../cypress/support/mount";

function setTestData() {
  const songsStore = useSongsStore();
  songsStore.$patch((state) => {
    state.songs = [testSong];
    state.selectedSongId = testSong.id;
    state.selectedChartIdx = 0;
  });

  const summaryStore = useSummaryStore();
  summaryStore.$patch((state) => {
    state.summary = {
      achievements: ["Full Combo!"],
      percent: "96.54",
      timing: {
        absolute: {
          count: 405,
          early: 0,
          late: 0,
        },
        miss: {
          count: 10,
          early: 0,
          late: 0,
        },
        perfect: {
          count: 350,
          early: 0,
          late: 0,
        },
        great: {
          count: 250,
          early: 120,
          late: 130,
        },
      },
    };
  });
}

describe("SummaryScreen", { viewportHeight: 900, viewportWidth: 1600 }, () => {
  it("displays score", () => {
    setTestData();

    mount(SummaryScreen, {
      styles: [
        style,
        appStyle,
        "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap",
      ],
    });
  });
});
