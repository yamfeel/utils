<script setup lang='ts'>
import { h, ref, Component } from 'vue'
import { NIcon, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5/es/index'
import { useRouter } from 'vue-router';
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '主页',
    key: 'home',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
    disabled: true
  },
  {
    label: 'RegExg',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const activeKey = ref('home')

const router = useRouter()

const handleMenuClick = () => {
  router.push(activeKey.value)
}
</script>


<template>
  <header>
    <n-menu class="header-menu" v-model:value="activeKey" mode="horizontal" :options="menuOptions"
      @click="handleMenuClick" />
  </header>
  <router-view></router-view>
</template>


<style>
header {
  width: 100vw;
  background-color: red;
  border-bottom: 1px solid #ebeef5;
}

.header-menu {
  width: 100%;
  background-color: #fff;
}
</style>