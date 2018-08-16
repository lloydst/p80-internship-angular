import { Component, OnInit } from '@angular/core';

/**
 * side nav component
 */
@Component({
    selector: 'app-admin-side-nav',
    templateUrl: './admin-side-nav.component.html'
})
export class AdminSideNavComponent implements OnInit {
    /**
     * constructor
     */
    constructor() { }
    /**
     * on load
     */
    ngOnInit() {
    }
    /**
     * toggle's sidenav and hides red x's on channels
     */
    toggle(opt?) {
        const navwidth = document.getElementById('Nav');
        const visability = document.getElementsByClassName('text');
        const tooltip = document.getElementsByClassName('tooltip');
        let visabilityitem;
        let tooltipitem;
        // console.log(opt)
        if (opt === 'close') { // string
            if (navwidth.style.width === '100vw') {
                navwidth.style.width = '50px';
                for (let i = 0; i < visability.length; i++) {
                    visabilityitem = visability[i];
                    visabilityitem.style.display = 'none';
                }
                for (let i = 0; i < tooltip.length; i++) {
                    tooltipitem = tooltip[i];
                    tooltipitem.style.display = 'inline-block';
                }
            }
        }
        if (opt !== 'close') { // opt= 'close' or undefined
            if (navwidth.style.width === '50px') {
                navwidth.style.width = '100vw';
                for (let i = 0; i < visability.length; i++) {
                    visabilityitem = visability[i];
                    visabilityitem.style.display = 'inline-block';
                }
                for (let i = 0; i < tooltip.length; i++) {
                    tooltipitem = tooltip[i];
                    tooltipitem.style.display = 'none';
                }
            } else if (navwidth.style.width === '100vw') {
                navwidth.style.width = '50px';
                for (let i = 0; i < visability.length; i++) {
                    visabilityitem = visability[i];
                    visabilityitem.style.display = 'none';
                }
                for (let i = 0; i < tooltip.length; i++) {
                    tooltipitem = tooltip[i];
                    tooltipitem.style.display = 'inline-block';
                }
            }
        }
    }
}
