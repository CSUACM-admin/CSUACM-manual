// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    server: {
        host: '0.0.0.0',
    },
    integrations: [starlight({
        title: 'CSUACM 校队手册',
        customCss: ['./src/styles/custom.css'],
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/CSUACM-admin/CSUACM-manual' }],
        sidebar: [
            {
                label: '快速开始',
                items: [{ autogenerate: { directory: '00-quick' } }],
            },
            {
                label: '第1章：校队文化与精神',
                items: [{ autogenerate: { directory: '01-culture' } }],
            },
            {
                label: '第2章：组织架构与角色分工',
                items: [{ autogenerate: { directory: '02-organization' } }],
            },
            {
                label: '第3章：训练体系与方法论',
                items: [{ autogenerate: { directory: '03-training' } }],
            },
            {
                label: '第4章：团队配合与赛场策略',
                items: [{ autogenerate: { directory: '04-contest-strategy' } }],
            },
            {
                label: '第5章：参赛全周期管理',
                items: [{ autogenerate: { directory: '05-competition' } }],
            },
            {
                label: '第6章：成长路线与生涯规划',
                items: [{ autogenerate: { directory: '06-growth' } }],
            },
            {
                label: '第7章：资源管理与外部连接',
                items: [{ autogenerate: { directory: '07-resources' } }],
            },
            {
                label: '第8章：常见问题与应急手册',
                items: [{ autogenerate: { directory: '08-faq' } }],
            },
            {
                label: '附录',
                items: [{ autogenerate: { directory: '09-appendix' } }],
            },
        ],
		}), preact()],
});
