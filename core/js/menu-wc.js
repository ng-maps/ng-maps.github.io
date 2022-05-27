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
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@ng-maps/core</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
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
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgMapsCoreModule.html" data-type="entity-link">NgMapsCoreModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NgMapsInfoWindowComponent.html" data-type="entity-link">NgMapsInfoWindowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NgMapsMarkerComponent.html" data-type="entity-link">NgMapsMarkerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NgMapsViewComponent.html" data-type="entity-link">NgMapsViewComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/NgMapsCircleDirective.html" data-type="entity-link">NgMapsCircleDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgMapsFitBoundsDirective.html" data-type="entity-link">NgMapsFitBoundsDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgMapsPolygonDirective.html" data-type="entity-link">NgMapsPolygonDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgMapsPolyline.html" data-type="entity-link">NgMapsPolyline</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgMapsPolylinePoint.html" data-type="entity-link">NgMapsPolylinePoint</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgMapsRectangleDirective.html" data-type="entity-link">NgMapsRectangleDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FitBoundsAccessor.html" data-type="entity-link">FitBoundsAccessor</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoOpMapsAPILoader.html" data-type="entity-link">NoOpMapsAPILoader</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CircleManager.html" data-type="entity-link">CircleManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FitBoundsService.html" data-type="entity-link">FitBoundsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InfoWindowManager.html" data-type="entity-link">InfoWindowManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapsAPILoader.html" data-type="entity-link">MapsAPILoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapsApiWrapper.html" data-type="entity-link">MapsApiWrapper</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarkerManager.html" data-type="entity-link">MarkerManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolygonManager.html" data-type="entity-link">PolygonManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolylineManager.html" data-type="entity-link">PolylineManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RectangleManager.html" data-type="entity-link">RectangleManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScriptLoaderService.html" data-type="entity-link">ScriptLoaderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BoundsLiteral.html" data-type="entity-link">BoundsLiteral</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CircleOptions.html" data-type="entity-link">CircleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FitBoundsDetails.html" data-type="entity-link">FitBoundsDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeoPoint.html" data-type="entity-link">GeoPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MapOptions.html" data-type="entity-link">MapOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkerIcon.html" data-type="entity-link">MarkerIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarkerOptions.html" data-type="entity-link">MarkerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Padding.html" data-type="entity-link">Padding</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RectangleOptions.html" data-type="entity-link">RectangleOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShapeOptions.html" data-type="entity-link">ShapeOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});