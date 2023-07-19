 example inject scope  -- share dữ liệu mà k phải lưu nhiều lần

 
    /* eslint-disable prettier/prettier */
    import { Injectable, Scope } from '@nestjs/common';

    @Injectable({
        scope: Scope.DEFAULT,
    })
    export class LoggerService {
        count = 0;
        log(): number {
            this.count++;
            return this.count;
        }
    }

Scope.DEFAULT ==> chung
Scope.REQUEST ==> Mỗi lần gửi lên request nó lại tạo mới cho mình 1 thực thể LoggerService  
Scope.TRANSIENT ==> Mỗi lần mình provider vào nó sẽ tạo ra 1 thực thể mới, mỗi lần inject sẽ tạo 1 thực thể mới


# circular dependency
-- hai cái phụ thuộc lẫn nhau
