<template>
	<div class="modal-dialog">
		<div class="modal-cover" v-if="isCoverShow" @click="closeModal"></div>
		<transition name="dialog-transition">
			<div class="modal-content" v-if="isDialogShow">
				<div class="modal-header">
					<button @click="closeModal">x</button>
				</div>
				<div class="modal-body">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	export default {
		props: {
			isDialogShow: {
				type: Boolean,
	      default: false
			},
			isCoverShow: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			closeModal () {
				this.$emit('on-close')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.modal-dialog {
		position: fixed;
		top: 0;
		.modal-cover {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #000;
			opacity: 0.3;
		}
		.modal-content {
			position: fixed;
			top: 20%;
			left: 50%;
			transform: translateX(-50%);
			z-index: 99;
			width: 50%;
			height: 300px;
			background: #fff;
			&.dialog-transition-enter {
				top: -100%;
			}
			&.dialog-transition-enter-active {
				transition: all 0.5s;
			}
			&.dialog-transition-leave-active {
				top: -100%;
				transition: all 0.3s;
			}
			.modal-header {
				button {
					float: right;
					border: 0;
					font-size: 20px;
					margin: 10px 20px;
					cursor: pointer;
				}
			}
		}
	}
</style>
