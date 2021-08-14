<template>
  <div class="row">
    <div class="col-xl-3 col-sm-6 mb-3">
      <div class="card text-white bg-primary o-hidden h-100">
        <div class="card-body">
          <div class="card-body-icon">
            <i class="fa fa-fw fa-comments"></i>
          </div>
          <div class="mr-5">
            새 메시지 <span class="badge badge-light">{{ new_message_count }}</span>
          </div>
        </div>
        <a class="card-footer text-white clearfix small z-1" href="#">
          <span class="float-left">자세히 보기</span>
          <span class="float-right">
            <i class="fa fa-angle-right"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
      <div class="card text-white bg-success o-hidden h-100">
        <div class="card-body">
          <div class="card-body-icon">
            <i class="fa fa-fw fa-list"></i>
          </div>
          <div class="mr-5">
            새 타스크 <span class="badge badge-light">{{ new_task_count }}</span>
          </div>
        </div>
        <a class="card-footer text-white clearfix small z-1" href="#">
          <span class="float-left">자세히 보기</span>
          <span class="float-right">
            <i class="fa fa-angle-right"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      new_message_count: 6,
      new_task_count: 3
    }
  }
}
</script>