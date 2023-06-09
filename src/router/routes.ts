import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "event",
		meta: {
			title: "Event",
		},
		component: () => import("pages/EventList.vue"),
	},
	{
		path: "/event/create",
		name: "create event",
		component: () => import("@/pages/EventEdit.vue"),
	},
	{
		path: "/event/edit/:id",
		name: "edit event",
		component: () => import("@/pages/EventEdit.vue"),
	},
	{
		path: "/event/:id",
		name: "event detail",
		component: () => import("@/pages/EventPage.vue"),
	},
	{
		path: "/competition",
		name: "competition page",

		meta: {
			title: "Competition",
		},
		component: () => import("@/pages/CompetitionPage.vue"),
		children: [
			{
				path: "list/:type",
				name: "competition list",
				component: () => import("@/pages/CompetitionPanel.vue"),
			},
			{
				path: "",
				name: "competition detail page",
				component: () => import("@/pages/CompetitionDetail.vue"),
				children: [
					{
						path: "rank/:id",
						name: "competition rank",
						component: () => import("@/pages/CompetitionRankPage.vue"),
					},
					{
						path: ":cid/:id",
						name: "competition challenge detail",
						component: () => import("@/pages/ChallengeDetail.vue"),
					},
					{
						path: ":id",
						name: "competition detail",
						component: () => import("@/pages/CompetitionContextPage.vue"),
					},
				],
			},
		],
	},
	{
		path: "/challenge",
		meta: {
			title: "Challenge",
		},
		children: [
			{
				path: "",
				name: "challenge list",
				component: () => import("@/pages/ChallengeList.vue"),
			},
			{
				path: "create",
				name: "create challenge",
				component: () => import("@/pages/ChallengeEdit.vue"),
			},
			{
				path: "edit/:id",
				name: "edit challenge",
				component: () => import("@/pages/ChallengeEdit.vue"),
			},
			{
				path: ":id",
				name: "challenge detail",
				component: () => import("@/pages/ChallengeDetail.vue"),
			},
		],
	},
	{
		path: "/403",
		name: "403",
		component: () => import("@/pages/ErrorForbidden.vue"),
	},
	// { path: "article", component: () => import("pages/ArticlePage.vue") },
	{
		path: "/user",
		children: [
			{
				path: "login",
				name: "login",
				meta: {
					title: "Login",
				},
				component: () => import("@/pages/LoginPage.vue"),
			},
		],
	},
	{
		path: "/:catchAll(.*)*",
		name: "404",
		component: () => import("pages/ErrorNotFound.vue"),
	},
];

export default routes;
