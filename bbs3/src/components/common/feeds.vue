<template>
  <div class='row'>
    <div class='col-lg-4'>
      <div class='card mb-3'>
        <div class='card-header'><i class='fa fa-bell-o'></i> 최근 게시물</div>
        <div class='list-group list-group-flush small'>
          <a
            v-for='(feed, i) in feedList'
            :key='i'
            class='list-group-item list-group-item-action'
            href='#'
          >
            <div class='media'>
              <!-- <img
                class='d-flex mr-3 rounded-circle'
                src='{{ feed.image }}'
                alt=''
              /> -->
              <div class='media-body'>
                <strong>{{ feed.author }}</strong> {{ feed.message }}
                <div class='text-muted smaller'>{{ feed.feedtime }}</div>
              </div>
            </div>
          </a>
          <a class='list-group-item list-group-item-action' href='#'>
            <span class='float-left'>자세히 보기</span>
            <span class='float-right'><i class='fa fa-angle-right'></i> </span>
          </a>
        </div>
        <div class='card-footer small text-muted'>2021/08/14 갱신됨</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      feedList: [
        {
          image: 'http://placehold.it/45x45',
          author: '박상훈',
          message: '새로운 게시글이 등록되었습니다.',
          feedtime: '2021/08/14 13:22:00'
        },
        {
          image: 'http://placehold.it/45x45',
          author: '박상훈',
          message: '새로운 게시글이 등록되었습니다.',
          feedtime: '2021/08/14 13:22:00'
        }
      ]
    }
  }
}
</script>
