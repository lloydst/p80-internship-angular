'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">boilerplate documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="todo.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>TODO
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AdminModule-57d179b34958c3cf015d3a463a88a79d"' : 'data-target="#xs-components-links-module-AdminModule-57d179b34958c3cf015d3a463a88a79d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AdminModule-57d179b34958c3cf015d3a463a88a79d"' : 'id="xs-components-links-module-AdminModule-57d179b34958c3cf015d3a463a88a79d"' }>
                                        <li class="link">
                                            <a href="components/AdminChannelsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminChannelsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminChannelsContentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminChannelsContentsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminEntranceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminEntranceComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminEntranceDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminEntranceDetailComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminEventComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminEventComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminEventDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminEventDetailComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AdminSideNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminSideNavComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChannelContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChannelContentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChannelNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChannelNewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ImageUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageUploadComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ImageViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ListingComponentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListingComponentsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-821678bd589cc2994e6e894caf206ec3"' : 'data-target="#xs-components-links-module-AppModule-821678bd589cc2994e6e894caf206ec3"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-821678bd589cc2994e6e894caf206ec3"' : 'id="xs-components-links-module-AppModule-821678bd589cc2994e6e894caf206ec3"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-821678bd589cc2994e6e894caf206ec3"' : 'data-target="#xs-injectables-links-module-AppModule-821678bd589cc2994e6e894caf206ec3"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-821678bd589cc2994e6e894caf206ec3"' : 'id="xs-injectables-links-module-AppModule-821678bd589cc2994e6e894caf206ec3"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FileService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NewsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>NewsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WeatherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>WeatherService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ChannelsModule.html" data-type="entity-link">ChannelsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ChannelsModule-92635cff8deb00a3cfaf84833f3fe7f3"' : 'data-target="#xs-components-links-module-ChannelsModule-92635cff8deb00a3cfaf84833f3fe7f3"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ChannelsModule-92635cff8deb00a3cfaf84833f3fe7f3"' : 'id="xs-components-links-module-ChannelsModule-92635cff8deb00a3cfaf84833f3fe7f3"' }>
                                        <li class="link">
                                            <a href="components/ChannelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChannelComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChannelsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChannelsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ChannelsRoutingModule.html" data-type="entity-link">ChannelsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ComponentsModule-d479ceca797bb7c8242ef8936492de8a"' : 'data-target="#xs-components-links-module-ComponentsModule-d479ceca797bb7c8242ef8936492de8a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ComponentsModule-d479ceca797bb7c8242ef8936492de8a"' : 'id="xs-components-links-module-ComponentsModule-d479ceca797bb7c8242ef8936492de8a"' }>
                                        <li class="link">
                                            <a href="components/AllComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AllComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BuildServersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BuildServersComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ComponentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComponentsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CustomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/EventComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FinancialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FinancialComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MeetingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeetingComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SupportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupportComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TrafficComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrafficComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/WeatherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WeatherComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/WebsiteLoopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WebsiteLoopComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ComponentsRoutingModule.html" data-type="entity-link">ComponentsRoutingModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Channel.html" data-type="entity-link">Channel</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteWebsite.html" data-type="entity-link">DeleteWebsite</a>
                    </li>
                    <li class="link">
                        <a href="classes/Enclosures.html" data-type="entity-link">Enclosures</a>
                    </li>
                    <li class="link">
                        <a href="classes/Image.html" data-type="entity-link">Image</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadSingleWebsite.html" data-type="entity-link">LoadSingleWebsite</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadWebsites.html" data-type="entity-link">LoadWebsites</a>
                    </li>
                    <li class="link">
                        <a href="classes/Message.html" data-type="entity-link">Message</a>
                    </li>
                    <li class="link">
                        <a href="classes/News.html" data-type="entity-link">News</a>
                    </li>
                    <li class="link">
                        <a href="classes/Paths.html" data-type="entity-link">Paths</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetWebsites.html" data-type="entity-link">SetWebsites</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateWebsite.html" data-type="entity-link">UpdateWebsite</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AppEffects.html" data-type="entity-link">AppEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DataService.html" data-type="entity-link">DataService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FileService.html" data-type="entity-link">FileService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/IpService.html" data-type="entity-link">IpService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/NewsService.html" data-type="entity-link">NewsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TicketService.html" data-type="entity-link">TicketService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/WeatherService.html" data-type="entity-link">WeatherService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/WebsiteEffects.html" data-type="entity-link">WebsiteEffects</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/RootState.html" data-type="entity-link">RootState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Website.html" data-type="entity-link">Website</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/WebsiteState.html" data-type="entity-link">WebsiteState</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
