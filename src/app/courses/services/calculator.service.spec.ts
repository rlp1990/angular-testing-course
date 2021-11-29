import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    it('should add two numbers', () => {

        // Instantiate fake logger service object using jasmine spy
        const logger = jasmine.createSpyObj('LoggerService', ["log"]);

        // Instantiate calculatorService to test the Component
        const calculator = new CalculatorService(logger);

        // Operation Add with the service
        const result = calculator.add(2, 2);

        // Testing service Add functionality
        expect(result).toBe(4);

        // Testing that inside logger service, the log method is called only once
        expect(logger.log).toHaveBeenCalledTimes(1);

    });

    it('should substract two numbers', () => {

        // Instantiate calculatorService to test the Component
        const calculator = new CalculatorService(new LoggerService());

        // Operation Substract with the service
        const result = calculator.subtract(2, 2);

        // Testing service Add functionality
        expect(result).toBe(0, 'unexpected substraction result');
        
    });
});