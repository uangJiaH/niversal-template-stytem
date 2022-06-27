// 引入loading
import { ElLoading } from 'element-plus'

// loading 加载处理
const loading = {
  loadingInstance: null,
  // loading 开启加载
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        target: 'body',
        background: 'rgba(0,0,0,.4)'
      })
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}

export default loading
