<template>
	<basic-card>
		<q-card-section class="text-h6">
			{{ $t("competition.submit_flag") }}
		</q-card-section>
		<q-card-section>
			<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
				<q-input
					filled
					v-model="flag"
					label="Flag"
					lazy-rules
					:rules="[(val) => (val && val.length > 0) || 'Please type something']"
				/>

				<div>
					<q-btn
						label="Submit"
						type="submit"
						color="primary"
						:loading="loading"
					/>
					<q-btn
						label="Reset"
						type="reset"
						color="primary"
						flat
						class="q-ml-sm"
					/>
				</div>
			</q-form>
		</q-card-section>
	</basic-card>
</template>

<script setup lang="ts">
import { $t } from "@/boot/i18n";
import { notifyErrorResponse } from "@/lib/api";
import notify from "@/lib/notify";
import { useCompetitionStore } from "@/stores/competition";
import { ref } from "vue";
import BasicCard from "./BasicCard.vue";
const props = defineProps<{
	comp_id: string;
	cha_id: string;
}>();

const competition = useCompetitionStore();
const flag = ref("");
const loading = ref(false);
function onReset() {
	flag.value = "";
}
function onSubmit() {
	loading.value = true;
	competition
		.check_flag(props.comp_id, props.cha_id, flag.value)
		.then(() => {
			notify.success($t("competition.pass"));
		})
		.catch(notifyErrorResponse)
		.finally(() => (loading.value = false));
}
</script>
