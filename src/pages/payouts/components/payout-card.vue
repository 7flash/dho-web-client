<script>
import removeMd from 'remove-markdown'
import { format } from '~/mixins/format'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'payout-card',
  mixins: [format],
  props: {
    payout: { type: Object, required: true }
  },
  computed: {
    ...mapGetters('accounts', ['isAuthenticated']),
    title () {
      const data = this.payout.strings.find(o => o.key === 'title')
      return (data && data.value) || ''
    },
    description () {
      const data = this.payout.strings.find(o => o.key === 'description')
      if (data) {
        return removeMd(data.value).replace(/\n/g, ' ')
      }
      return ''
    }
  },
  methods: {
    ...mapMutations('layout', ['setShowRightSidebar', 'setRightSidebarType']),
    showCardFullContent () {
      this.setShowRightSidebar(true)
      this.setRightSidebarType({
        type: 'payoutView',
        data: this.payout
      })
    }
  }
}
</script>

<template lang="pug">
q-card.payout
  .ribbon
    span.text-white.bg-payment Payment
  .column.fit.flex.justify-between
    div
      q-card-section.text-center.q-pb-sm(@click="showCardFullContent")
        img.icon(src="~assets/icons/payouts.svg")
      q-card-section
        .type(@click="showCardFullContent") Payout
        .title(@click="showCardFullContent") {{ title }}
</template>

<style lang="stylus" scoped>
.payout
  width 300px
  border-radius 1rem
  margin 10px
.payout:hover
  z-index 10
  box-shadow 0 8px 12px rgba(0,0,0,0.2), 0 9px 7px rgba(0,0,0,0.14), 0 7px 7px 7px rgba(0,0,0,0.12)
.type
  cursor pointer
  text-transform capitalize
  text-align center
  font-weight 800
  font-size 28px
.title
  cursor pointer
  text-align center
  font-size 20px
  color $grey-6
  line-height 22px
.icon
  margin-top 20px
  width 100%
  max-width 100px
.role-actions
  button
    width 45%
</style>
