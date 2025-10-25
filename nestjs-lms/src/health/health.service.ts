import { Injectable } from '@nestjs/common';
import { HealthResponse } from 'src/types/health.types';

@Injectable()
export class HealthService {
  getHealth(): HealthResponse {
    return {
      status: 'OK',
    };
  }
}
