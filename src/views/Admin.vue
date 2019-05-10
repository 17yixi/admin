<template>
  <div class="admin">
    <el-container>
    <el-header>
      <admin-header></admin-header>
    </el-header>
    <el-container>
      <el-aside>
        <aside-tab></aside-tab>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import AsideTab from '@/components/AsideTab.vue';
import AdminHeader from '@/components/Header.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    AsideTab,AdminHeader
  }
}
</script>

<style scoped lang="css">
.admin{
  width: 100%;
  height: 100%;
}
</style>
