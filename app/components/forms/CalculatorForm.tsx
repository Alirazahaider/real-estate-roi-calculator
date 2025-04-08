'use client';

import Button from '../ui/Button';
import Input from '../ui/Input';
import { RoiData } from '@/app/types/calculator';

interface CalculatorFormProps {
    data: RoiData;
    errors: string[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const CalculatorForm = ({
                            data,
                            errors,
                            handleChange,
                            handleSubmit
                        }: CalculatorFormProps) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <Input
                    label="Purchase Price ($)"
                    name="purchasePrice"
                    type="number"
                    value={data.purchasePrice}
                    onChange={handleChange}
                    required
                    className="text-black"
                />

                <Input
                    label="Down Payment ($)"
                    name="downPayment"
                    type="number"
                    value={data.downPayment}
                    onChange={handleChange}
                    required
                    className="text-black"
                />

                <Input
                    label="Loan Amount ($)"
                    name="loanAmount"
                    type="number"
                    value={data.loanAmount}
                    onChange={handleChange}
                    className="text-black"
                />

                <Input
                    label="Annual Rental Income ($)"
                    name="annualRentalIncome"
                    type="number"
                    value={data.annualRentalIncome}
                    onChange={handleChange}
                    required
                    className="text-black"
                />

                <Input
                    label="Annual Expenses ($)"
                    name="annualExpenses"
                    type="number"
                    value={data.annualExpenses}
                    onChange={handleChange}
                    required
                    className="text-black"
                />
            </div>

            {errors.length > 0 && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                    <ul className="list-disc pl-5 space-y-1">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            <Button type="submit" className="w-full">
                Calculate ROI
            </Button>
        </form>
    );
};

export default CalculatorForm;