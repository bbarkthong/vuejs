<template>
<!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.html">Start Bootstrap</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" v-for='(menu, i) in menuList' :key='i' >
          <a class="nav-link" href="index.html">
            <i class="fa fa-fw" :class="menu.icon"></i>
            <span class="nav-link-text">{{ menu.text }}</span>
          </a>
          <!-- <router-link to='menu.href' class='nav-link'>
            <i class="fa fa-fw" :class="menu.icon"></i>
            <span class="nav-link-text">{{ menu.text }}</span>
          </router-link> -->
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <!-- nofication -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-envelope"></i>
            <span class="d-lg-none">Messages
              <span class="badge badge-pill badge-primary">{{ nofication.message.totalCount }} New</span>
            </span>
            <span class="indicator text-primary d-none d-lg-block" v-if='nofication.message.totalCount > 0'>
              <i class="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="messagesDropdown">
            <h6 class="dropdown-header">New Messages:</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" v-for="(notice, i) in nofication.message.messages" :key="i" >
              <strong>{{ notice.createBy }}</strong>
              <span class='small float-right text-muted'>{{ notice.createDate }}</span>
              <div class='dropdown-message small'>{{ notice.message }}</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item small" href="#">View all messages</a>
          </div>
        </li>
        <!-- alert  -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-bell"></i>
            <span class="d-lg-none">Alerts
              <span class="badge badge-pill badge-warning">{{ alert.message.totalCount }}  New</span>
            </span>
            <span class="indicator text-warning d-none d-lg-block" v-if='alert.message.totalCount > 0'>
              <i class="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="alertsDropdown">
            <h6 class="dropdown-header">New Alerts:</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" v-for="(notice, i) in alert.message.messages" :key="i">
              <span class="text-success">
                <strong>
                  <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">{{ notice.createDate }}</span>
              <div class="dropdown-message small">{{ notice.message }}</div>
            </a>
            <!-- <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-danger">
                <strong>
                  <i class="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-success">
                <strong>
                  <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a> -->
            <div class="dropdown-divider"></div>
            <a class="dropdown-item small" href="#">View all alerts</a>
          </div>
        </li>
        <!-- <li class="nav-item">
          <form class="form-inline my-2 my-lg-0 mr-lg-2">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-primary" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      menuList: [{
        title: '글 목록',
        href: 'http://localhost:8080/dashboard',
        icon: 'fa-table',
        text: '글 목록'
      },
      {
        title: '글 작성',
        href: 'http://localhost:8080/articles',
        icon: 'fa-file',
        text: '글 작성'
      }],
      nofication: {
        message: {
          totalCount: 12,
          messages: [{
            createBy: 'David Miller',
            createDate: '11:21 AM',
            message: 'Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don\'t overflow over to the sides!'
          },
          {
            createBy: 'Jane Smith',
            createDate: '11:21 AM',
            message: 'I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!'
          },
          {
            createBy: 'John Doe',
            createDate: '11:21 AM',
            message: 'I\'ve sent the final files over to you for review. When you\'re able to sign off of them let me know and we can discuss distribution.'
          }]
        }
      },
      alert: {
        message: {
          totalCount: 12,
          messages: [{
            createBy: 'David Miller',
            createDate: '11:21 AM',
            message: 'Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don\'t overflow over to the sides!'
          },
          {
            createBy: 'Jane Smith',
            createDate: '11:21 AM',
            message: 'I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!'
          },
          {
            createBy: 'John Doe',
            createDate: '11:21 AM',
            message: 'I\'ve sent the final files over to you for review. When you\'re able to sign off of them let me know and we can discuss distribution.'
          }]
        }
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.indicator {
  position: absolute;
  top: 2px;
  left: 15px;
  font-size: 8px;
}
.dropdown-message {
  max-width: 300px;
}
.dropdown-item > div {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
