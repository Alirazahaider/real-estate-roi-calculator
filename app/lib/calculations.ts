// src/lib/calculations.ts
import { RoiData, RoiResult } from '@/app/types/calculator';

export const calculateROI = (data: RoiData): RoiResult => {
    const cashInvested = data.downPayment;
    const netAnnualIncome = data.annualRentalIncome - data.annualExpenses;
    const roiPercentage = (netAnnualIncome / cashInvested) * 100;

    return {
        cashInvested,
        netAnnualIncome,
        roiPercentage: parseFloat(roiPercentage.toFixed(2))
    };
};

export const validateInputs = (data: RoiData): string[] => {
    const errors: string[] = [];

    if (data.purchasePrice <= 0) errors.push('Purchase price must be positive');
    if (data.downPayment <= 0) errors.push('Down payment must be positive');
    if (data.downPayment > data.purchasePrice) errors.push('Down payment cannot exceed purchase price');
    if (data.loanAmount < 0) errors.push('Loan amount cannot be negative');
    if (data.annualRentalIncome < 0) errors.push('Rental income cannot be negative');
    if (data.annualExpenses < 0) errors.push('Expenses cannot be negative');

    return errors;
};