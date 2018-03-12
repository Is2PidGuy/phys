
import './styles.css';

const root = document.getElementById('root');
const w = root.clientWidth;
const h = root.clientHeight;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = w;
canvas.height = h;

class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vel = { x: 0, y: 0 };
    }

    project(axis) {
        const mid = axis.x * this.x + axis.y * this.y;
        return {
            min: mid - this.r,
            max: mid + this.r,
        };
    }
}

class Rect {
    constructor(a, b, c, d) {
        this.points = [a, b, c, d];
    }

    project(axis) {
        let l = 10000000;
        let r = -10000000;
        this.points.forEach((d) => {
            const p = axis.x * d.x + axis.y * d.y;
            l = Math.min(l, p);
            r = Math.max(r, p);
        });
        return {
            min: l,
            max: r,
        };
    }
}

const drawLine = (a, b, color = 'black') => {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = color;
    ctx.stroke();
};

const drawRect = (params, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(
        params.x - params.w / 2,
        params.y - params.h / 2,
        w,
        h,
    );
};

const penetration = (axis, bodyA, bodyB) => {
    const a = bodyA.project(axis);
    const b = bodyB.project(axis);
    const l = Math.max(a.min, b.min);
    const r = Math.min(a.max, b.max);
    return l <= r ? r - l : 0;
};

const checkCollision = (rect, ball) => {
    const pts = rect.points;
    let minp = 9999999;
    let paxis;
    for (let i = 0; i < pts.length; i += 1) {
        const n = (i + 1) % pts.length;
        const u = pts[n].x - pts[i].x;
        const v = pts[n].y - pts[i].y;
        const mag = Math.hypot(u, v);
        const axis = { x: v / mag, y: -u / mag };
        const p = penetration(axis, rect, ball);
        if (p === 0) return false;
        if (i === 0) {
            minp = p;
            paxis = axis;
        }
    }
    return { axis: paxis, penetration: minp + 0.00001 };
};

const generateTerrain = () => {
    const N = 30;
    const dx = 30;
    const points = [];
    let x = 0;
    let y = 500;
    for (let i = 0; i < N; i += 1) {
        points.push({
            x, y,
        });
        x += dx;
        y += Math.random() * 30;
    }
    return points;
};

const pts = generateTerrain();
const ball = new Ball(300, 300, 50);
setInterval(
    () => {
        ball.vel.y += 0.1;
        ball.x += ball.vel.x;
        ball.y += ball.vel.y;
        drawRect({ x: w / 2, y: h / 2, w, h }, 'silver');
        for (let i = 1; i < pts.length; i += 1) {
            drawLine(pts[i - 1], pts[i]);
        }
        let ref = false;
        for (let i = 1; i < pts.length; i += 1) {
            const coll = checkCollision(
                new Rect(
                    pts[i - 1],
                    pts[i],
                    { x: pts[i].x, y: h },
                    { x: pts[i - 1].x, y: h },
                ),
                ball,
            );
            if (coll) {
                ref = true;
                ball.x += coll.axis.x * coll.penetration;
                ball.y += coll.axis.y * coll.penetration;
                break;
            }
        }
        if (ref) {
            ball.vel.y *= -1;
            ball.vel.y *= 0.8;
        }
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.ellipse(ball.x, ball.y, ball.r, ball.r, 0, 0, 2 * Math.PI);
        ctx.fill();
    },
    20,
);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        ball.vel.x += 2;
    }
    if (e.key === 'ArrowLeft') {
        ball.vel.x -= 2;
    }
});
