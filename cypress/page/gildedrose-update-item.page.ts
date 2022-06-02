class GildedroseUpdateItem {
    private nameField: string;
    private name: string;
    private sellInField: string;
    private qualityField: string;
    private typeField: string;
    private confirmButton: string;
    private qualityError: string;
    private updateLastItem: string


    constructor() {
        this.nameField = '[formcontrolname="name"]'
        this.sellInField = '[formcontrolname="sellIn"]'
        this.qualityField = '[formcontrolname="quality"]'
        this.deployForm = '[data-automation="item-form-type"]'
        this.typeField = 'span'
        this.confirmButton = '[data-automation="item-form-confirm-button"]'
        this.qualityError = '#mat-error-0'
        this.updateLastItem = 'div'
    }

    public fillName(nameParam: string): void {
        cy.get(this.nameField).type(nameParam)
    }

    public fillSellIn(sellInParam: int): void {
        cy.get(this.sellInField).type(sellInParam)
    }

    public fillQuality(qualityParam: int): void {
        cy.get(this.qualityField).type(qualityParam)
    }

    public selectType(typeParam: string): void {
        cy.get(this.deployForm).click();
        cy.get(this.typeField).contains(typeParam).click();
    }
    
    public pressUpdateButton(): void {
        cy.get(this.confirmButton).click();
    }

    public pressPenButton(): void {
        cy.get(this.updateLastItem).last()
          .within(()=>{
		cy.get('.mat-card mat-focus-indicator list-row').first().get('div:nth-child(5) > mat-icon:nth-child(1)').click();
	})


    }
}
export { GildedroseUpdateItem }