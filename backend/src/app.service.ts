// backend/src/app.service.ts
import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @MessagePattern({ cmd: 'get_user' })
  getHello(): string {
    return 'Hello World!';
  }
  getUser(data: any) {
    // Fetch user logic here
    return { userId: data.id, name: 'John Doe' };
  }
}



