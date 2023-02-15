"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async signin(ctx) {
        await ctx.render('signin');
    },
    async signinOk(ctx) {
        await ctx.render('signin-ok', {
            title: '登录成功',
            name: ctx.query.name || '',
        });
    },
    async signinFailed(ctx) {
        await ctx.render('signin-failed', {
            title: '登录失败',
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29udHJvbGxlci9odG1sL3NpZ25pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZO1FBQ3ZCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFZO1FBQ3pCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDNUIsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFZO1FBQzdCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDaEMsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHQgfSBmcm9tICdrb2EnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzeW5jIHNpZ25pbihjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBjdHgucmVuZGVyKCdzaWduaW4nKTtcbiAgfSxcblxuICBhc3luYyBzaWduaW5PayhjdHg6IENvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBjdHgucmVuZGVyKCdzaWduaW4tb2snLCB7XG4gICAgICB0aXRsZTogJ+eZu+W9leaIkOWKnycsXG4gICAgICBuYW1lOiBjdHgucXVlcnkubmFtZSB8fCAnJyxcbiAgICB9KTtcbiAgfSxcblxuICBhc3luYyBzaWduaW5GYWlsZWQoY3R4OiBDb250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgY3R4LnJlbmRlcignc2lnbmluLWZhaWxlZCcsIHtcbiAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcbiAgICB9KTtcbiAgfSxcbn07XG4iXX0=