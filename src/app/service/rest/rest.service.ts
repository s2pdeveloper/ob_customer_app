import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';
@Injectable({
  providedIn: 'root',
})
export class RestService {
  routes: any = {
    getAllCustomerDashBoardPath: (id: any) =>
      `customer/getAllCustomerDashBoard`,
    getAllAsmBySubTopicId: (id: any) =>
      `assignment/getAllAssignmentBySubTopicId/${id}`,
    getAllTopicVideoBySubTopicId: (id: any) =>
      `topicVideo/getAllTopicVideoBySubTopicId/${id}`,
    getTopicVideoDetailsById: (id: any) =>
      `topicVideo/getTopicVideoDetailsById/${id}`,
    getAllTopicVideoByBatchId: (id: any) =>
      `topicVideo/getAllTopicVideoByBatchId/${id}`,
    selectAllTopicByCourseId: (id: any) =>
      `topic/selectAllTopicByCourseId/${id}`,
    getAllAssignmentByBatchId: (id: any) =>
      `assignment/getAllAssignmentByBatchId/${id}`,
    getAllShopNotifications: (page, pageSize) =>
      `notification/getAllShopNotifications?page=${page}&pageSize=${pageSize}`,
  };
  constructor(private http: ApiService, private httpClient: HttpClient) {}

  getAllAssignmentByBatchId(id) {
    return this.http.get(this.routes.getAllAssignmentByBatchId(id));
  }

  getAllTopicByCourseId(id) {
    return this.http.get(this.routes.selectAllTopicByCourseId(id));
  }
  getAllAssignmentBySubTopicId(id) {
    return this.http.get(this.routes.getAllAsmBySubTopicId(id));
  }
  getAllTopicVideoBySubTopicId(id) {
    return this.http.get(this.routes.getAllTopicVideoBySubTopicId(id));
  }
  getAllAssignmentById(id) {
    return this.http.get(this.routes.getAsmByIdPath(id));
  }
  getAllTopicVideoById(id) {
    return this.http.get(this.routes.getTopicVideoDetailsById(id));
  }
  getAllShopNotifications(page, pageSize) {
    return this.http.get(this.routes.getAllShopNotifications(page, pageSize));
  }
}
