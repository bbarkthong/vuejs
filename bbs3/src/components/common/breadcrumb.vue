<template>
    <ol class="breadcrumb">
    <li v-for="(breadcrumb,i) in $store.state.breadcrumb" :key="i" class="breadcrumb-item">
        <a href="#" v-if="!breadcrumb.is_leaf">
            <!-- <a href="{{ breadcrumb.href }}" v-if="!breadcrumb.is_leaf"> -->
        {{ breadcrumb.menu_nm }}
        </a>
        <span v-else>
        {{ breadcrumb.menu_nm }}
        </span>
    </li>
    <!-- <li class="breadcrumb-item active">내 대시보드</li> -->
    </ol>
</template>
