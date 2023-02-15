"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const openai_1 = __importDefault(require("../controller/api/openai"));
const router = new koa_router_1.default();
router.post('/chat', openai_1.default.chat);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGUvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNERBQWdDO0FBQ2hDLHNFQUF3RDtBQUV4RCxNQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU1QyxrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IG9wZW5BSUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9hcGkvb3BlbmFpJztcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdCgnL2NoYXQnLCBvcGVuQUlDb250cm9sbGVyLmNoYXQpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=