<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class PageController
 *
 * @Route("/page")
 */
class PageController extends Controller
{
    /**
     * @Route("/pages")
     */
    public function page() {

        return $this->render(
            'page.html.twig'

        );
    }
}
