const AppBadges = () => {
    return (
        <div className="flex justify-center space-x-4 p-4">
            {/* App Store Badge with added margin */}
            <div className="mr-8">
                <a href="https://apps.apple.com/us/app/meter-for-taxis/id931234419?itsct=apps_box_badge&amp;itscg=30200" style={{ display: 'inline-block', overflow: 'hidden', borderRadius: '13px', width: '250px', height: '83px' }}>
                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1413936000" alt="Download on the App Store" style={{ borderRadius: '13px', width: '250px', height: '83px' }} />
                </a>
            </div>

            {/* Google Play Badge */}
            <div>
                <a href='https://play.google.com/store/apps/details?id=osacky.ridemeter&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' style={{ width: '250px', height: 'auto' }} />
                </a>
            </div>
        </div>
    );
}

export default AppBadges;