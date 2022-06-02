import { GildedroseHome, GildedroseAddItem, GildedroseUpdateItem } from "../page/index";

describe("", () => {
  let gildedroseHome: GildedroseHome;
  let gildedroseAddItem: GildedroseAddItem;
  let gildedroseUpdateItem: GildedroseUpdateItem;

  before(() => {
    // Arrange
    gildedroseHome = new GildedroseHome();
    gildedroseAddItem = new GildedroseAddItem();
    gildedroseUpdateItem = new GildedroseUpdateItem();
    gildedroseHome.visitGildedrose();
    gildedroseHome.goToAddItem();
    gildedroseAddItem.fillName("New Item");
    gildedroseAddItem.fillSellIn(3);
    gildedroseAddItem.fillQuality(5);
    gildedroseAddItem.selectType("NORMAL");
    gildedroseAddItem.pressAddButton();
  });
  it("", () => {
    // Action
    
    gildedroseUpdateItem.pressPenButton();
    gildedroseUpdateItem.fillName("Updated Item");
    gildedroseUpdateItem.fillSellIn(10);
    gildedroseUpdateItem.fillQuality(50);
    gildedroseUpdateItem.selectType("AGED");
    gildedroseUpdateItem.pressUpdateButton();

    // Assert
  });
});
