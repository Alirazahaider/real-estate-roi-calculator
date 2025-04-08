// src/hooks/useRoiCalculation.ts
import { useState } from 'react';
import { RoiData, RoiResult } from '@/app/types/calculator';
import { calculateROI, validateInputs } from '@/app/lib/calculations';

export const useRoiCalculation = () => {
    const [data, setData] = useState<RoiData>({
        purchasePrice: 0,
        downPayment: 0,
        loanAmount: 0,
        annualRentalIncome: 0,
        annualExpenses: 0
    });

    const [result, setResult] = useState<RoiResult | null>(null);
    const [errors, setErrors] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateInputs(data);

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setResult(null);
            return;
        }

        setErrors([]);
        setResult(calculateROI(data));
    };

    return { data, result, errors, handleChange, handleSubmit };
};