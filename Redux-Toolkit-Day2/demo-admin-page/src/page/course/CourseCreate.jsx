import React from "react";

function CourseCreate() {
  return (
    <div class="course-list mt-4 mb-4">
      <div class="container">
        <div class="mb-4">
          <button class="btn-custom btn-create-course">
            <span>
              <i class="fa-solid fa-plus"></i>
            </span>
            Tạo
          </button>
          <a href="./course-list.html" class="btn-custom btn-refresh">
            <span>
              <i class="fa-solid fa-angle-left"></i>
            </span>
            Quay lại
          </a>
        </div>

        <div class="course-list-inner p-2">
          <div class="row">
            <div class="col-md-8">
              <div class="mb-3">
                <label for="course-name" class="form-label fw-bold">
                  Tên khóa học
                </label>
                <input type="text" class="form-control" id="course-name" />
              </div>
              <div class="mb-3">
                <label for="course-description" class="form-label fw-bold">
                  Mô tả
                </label>
                <textarea
                  class="form-control"
                  id="course-description"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label for="course-type" class="form-label fw-bold">
                  Hình thức học
                </label>
                <select class="form-control" id="course-type">
                  <option hidden>- Chọn hình thức học</option>
                  <option value="online">Online</option>
                  <option value="onlab">Onlab</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="course-topic" class="form-label fw-bold">
                  Chủ đề
                </label>
                <select
                  class="form-control"
                  id="course-topic"
                  multiple="multiple"
                >
                  <option value="1">Backend</option>
                  <option value="2">Frontend</option>
                  <option value="3">Mobile</option>
                  <option value="4">Lập trình web</option>
                  <option value="5">Database</option>
                  <option value="6">Devops</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="course-supporter" class="form-label fw-bold">
                  Tư vấn viên
                </label>
                <select class="form-control" id="course-supporter">
                  <option hidden>- Chọn tư vấn viên</option>
                  <option value="1">Nguyễn Văn A</option>
                  <option value="2">Trần Văn B</option>
                  <option value="3">Ngô Thị C</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCreate;
