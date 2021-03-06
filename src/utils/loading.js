/*
 * @配置nprogress进度条loading
 *  */

import { ElLoading } from 'element-plus'

const elLoading = {
  loadingInstance: null,
  start() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  },
  done() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export default {
  elLoading
}
