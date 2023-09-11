/******************************************************************************
 *
 * Copyright (c) 2019-2023 Fraunhofer IOSB-INA Lemgo,
 * eine rechtlich nicht selbstaendige Einrichtung der Fraunhofer-Gesellschaft
 * zur Foerderung der angewandten Forschung e.V.
 *
 *****************************************************************************/

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClipboardService {
    private readonly data = new Map<string, any>();

    public contains(format?: string): boolean {
        return format ? this.data.has(format) : this.data.size > 0;
    }

    public get<T>(format: string): T {
        return this.data.get(format);
    }

    public set(format: string, data: any): void {
        this.data.set(format, data);
    }

    public clear(format?: string): void {
        if (format) {
            this.data.delete(format);
        }
        else {
            this.data.clear();
        }
    }
}