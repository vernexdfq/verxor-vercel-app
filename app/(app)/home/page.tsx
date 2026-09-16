import { HomeHeader } from "@/components/app/home-header"
import { WalletCard } from "@/components/app/wallet-card"
import { QuickActions } from "@/components/app/quick-actions"
import { RecentActivity } from "@/components/app/recent-activity"

export default function HomePage() {
  return (
    <div className="space-y-6 px-4 pt-5">
      <HomeHeader />
      <WalletCard />
      <QuickActions />
      <RecentActivity />
    </div>
  )
}
