<template>
  <div class="card mb-3">
    <div class="card-header"><i class="fa fa-table"></i> 게시판</div>
    <div class="card-body">
      <div class="table-responsive">
        <div
          id="dataTable_wrapper"
          class="dataTables_wrapper container-fluid dt-bootstrap4"
        >
          <div class="row">
            <div class="col-sm-12">
              <table
                class="table table-striped table-bordered table-hover"
                id="dataTable"
              >
                <thead>
                  <tr>
                    <th v-for="header_name in header_names" :key="header_name">
                      {{ header_name }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(record, i) in records" :key="i">
                    <td>{{ record.seq }}</td>
                    <td>{{ record.title }}</td>
                    <td>{{ record.createBy }}</td>
                    <td>{{ record.createTime }}</td>
                    <td>{{ record.viewCount }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-5">
              <div
                class="dataTables_info"
                id="dataTable_info"
                role="status"
                aria-live="polite"
              >
                Showing 1 to 10 of 57 entries
              </div>
            </div>
            <div class="col-sm-12 col-md-7">
              <div
                class="dataTables_paginate paging_simple_numbers"
                id="dataTable_paginate"
              >
                <ul class="pagination">
                  <li
                    v-for="page in pages"
                    :key="page"
                    class="paginate_button page-item"
                    :class="[{ active: page.is_active }, {disabled: page.is_disabled}]"
                  >
                    <a
                      href="#"
                      aria-controls="dataTable"
                      data-dt-idx="{{ page.title }}"
                      tabindex="0"
                      class="page-link"
                      >{{ page.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer small text-muted">
      Updated yesterday at 11:59 PM
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header_names: ["순번", "제목", "작성자", "작성일", "조회수"],
      records: [
        {
          seq: 10966,
          title: "현대건설 사기분양, 대법원확정판결",
          createBy: "김진수",
          createTime: "2021.08.14",
          viewCount: 23,
        },
        {
          seq: 10965,
          title: "아직도 모르신다고요??!!",
          createBy: "이은진",
          createTime: "2021.08.14",
          viewCount: 0,
        },
        {
          seq: 10965,
          title: "아직도 모르신다고요??!!",
          createBy: "이은진",
          createTime: "2021.08.14",
          viewCount: 0,
        },
        {
          seq: 10965,
          title: "아직도 모르신다고요??!!",
          createBy: "이은진",
          createTime: "2021.08.14",
          viewCount: 0,
        },
        {
          seq: 10965,
          title: "아직도 모르신다고요??!!",
          createBy: "이은진",
          createTime: "2021.08.14",
          viewCount: 0,
        },
        {
          seq: 10965,
          title: "아직도 모르신다고요??!!",
          createBy: "이은진",
          createTime: "2021.08.14",
          viewCount: 0,
        },
        {
          seq: 10965,
          title: "아직도 모르신다고요??!!",
          createBy: "이은진",
          createTime: "2021.08.14",
          viewCount: 0,
        },
      ],
      pages: [
        {
          title: "Prev",
          is_disabled: true,
          is_active: true,
        },
        {
          title: "1",
          is_disabled: false,
          is_active: true,
        },
        {
          title: "2",
          is_disabled: false,
          is_active: false,
        },
        {
          title: "3",
          is_disabled: false,
          is_active: false,
        },
        {
          title: "4",
          is_disabled: false,
          is_active: false,
        },
        {
          title: "5",
          is_disabled: false,
          is_active: false,
        },
        {
          title: "6",
          is_disabled: false,
          is_active: false,
        },
        {
          title: "Next",
          is_disabled: false,
          is_active: false,
        },
      ],

      //   <li
      //     class="paginate_button page-item previous disabled"
      //     id="dataTable_previous"
      //   >
      //     <a
      //       href="#"
      //       aria-controls="dataTable"
      //       data-dt-idx="0"
      //       tabindex="0"
      //       class="page-link"
      //       >Previous</a
      //     >
      //   </li>
      //   <li class="paginate_button page-item active">
      //     <a
      //       href="#"
      //       aria-controls="dataTable"
      //       data-dt-idx="1"
      //       tabindex="0"
      //       class="page-link"
      //       >1</a
      //     >
      //   </li>
      //   <li class="paginate_button page-item">
      //     <a
      //       href="#"
      //       aria-controls="dataTable"
      //       data-dt-idx="2"
      //       tabindex="0"
      //       class="page-link"
      //       >2</a
      //     >
    };
  },
};
</script>