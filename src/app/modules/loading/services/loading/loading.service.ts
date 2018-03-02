import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LoadingService {

    @Output() gLoading: EventEmitter<any> = new EventEmitter();

    setValue(isLoading: boolean): void {
        this.gLoading.emit(isLoading);
    }

    getValue(): any {
        return this.gLoading;
    }
}