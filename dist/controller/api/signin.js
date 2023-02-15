"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    postSignIn(ctx) {
        const name = ctx.request.body.name || '';
        const password = ctx.request.body.password || '';
        console.log(`signin with name: ${name}, password: ${password}`);
        if (name === 'koa' && password === '12345') {
            ctx.redirect(`/html/signin-ok?name=${name}`);
        }
        else {
            ctx.redirect('/html/signin-failed');
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29udHJvbGxlci9hcGkvc2lnbmluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWU7SUFDYixVQUFVLENBQUMsR0FBWTtRQUNyQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxlQUFlLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDMUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0wsR0FBRyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAna29hJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwb3N0U2lnbkluKGN0eDogQ29udGV4dCk6IHZvaWQge1xuICAgIGNvbnN0IG5hbWUgPSBjdHgucmVxdWVzdC5ib2R5Lm5hbWUgfHwgJyc7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBjdHgucmVxdWVzdC5ib2R5LnBhc3N3b3JkIHx8ICcnO1xuICAgIGNvbnNvbGUubG9nKGBzaWduaW4gd2l0aCBuYW1lOiAke25hbWV9LCBwYXNzd29yZDogJHtwYXNzd29yZH1gKTtcbiAgICBpZiAobmFtZSA9PT0gJ2tvYScgJiYgcGFzc3dvcmQgPT09ICcxMjM0NScpIHtcbiAgICAgIGN0eC5yZWRpcmVjdChgL2h0bWwvc2lnbmluLW9rP25hbWU9JHtuYW1lfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHgucmVkaXJlY3QoJy9odG1sL3NpZ25pbi1mYWlsZWQnKTtcbiAgICB9XG4gIH0sXG59O1xuIl19