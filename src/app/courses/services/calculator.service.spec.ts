import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    // Define services here once to get access to them inside each case 'it'
    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(() => {

        console.log("Calling beforeEach");

        // Instantiate fake logger service object using jasmine spy
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

        // To provide dependency injection: CalculatorService, the one provided by jasmine
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });

        // Instantiate calculatorService to test the Component by getting the one previously configured
        calculator = TestBed.get(CalculatorService);

    });

    it('should add two numbers', () => {

        console.log("add test");

        // Operation Add with the service
        const result = calculator.add(2, 2);

        // Testing service Add functionality
        expect(result).toBe(4);

        // Testing that inside logger service, the log method is called only once
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });

    it('should substract two numbers', () => {

        console.log("substract test");

        // Operation Substract with the service
        const result = calculator.subtract(2, 2);

        // Testing service Add functionality
        expect(result).toBe(0, 'unexpected substraction result');
        
        // Testing that inside logger service, the log method is called only once
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
        
    });
});