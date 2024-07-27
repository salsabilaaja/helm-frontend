import CONFIG from "../static/config.json"
import CCNCoverView from "../views/CCNCoverView"
import CCNQuestionView from "../views/CCNQuestionView"
import CCNResultView from "../views/CCNResultView"


const router = [
  {
    "id": "coverView",
    "path": CONFIG.pages.endpoint.cover,
    "element": CCNCoverView
  },
  {
    "id": "questionView",
    "path": CONFIG.pages.endpoint.question,
    "element": CCNQuestionView
  },
  {
    "id": "resultView",
    "path": CONFIG.pages.endpoint.result,
    "element": CCNResultView
  }
]

export default router
