// src/types/calculator.d.ts
export interface RoiData {
    purchasePrice: number;
    downPayment: number;
    loanAmount: number;
    annualRentalIncome: number;
    annualExpenses: number;
}

export interface RoiResult {
    cashInvested: number;
    netAnnualIncome: number;
    roiPercentage: number;
}